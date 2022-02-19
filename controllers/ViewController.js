const { User, People, Sequelize } = require("../models");

class ViewController {
    /**
     * Auth View
     */
    static loginView(req, res) {
        res.render("index", {
            page: "login",
            props: {
                title: "Login",
            },
        });
    }
    static registerView(req, res) {
        res.render("index", {
            page: "register",
            props: {
                title: "Register",
            },
        });
    }
    /**
     * Auth View - END
     */
    static homeView = async (req, res) => {
        const { user } = req.session.passport;
        const isAdmin = user.roles === "ADMIN";

        const data = isAdmin
            ? await User.findAll({
                  attributes: ["id", "email", "roles"],
                  include: [
                      {
                          model: People,
                          attributes: ["name"],
                      },
                  ],
                  where: { id: { [Sequelize.Op.not]: user.id } },
                  raw: true,
                  order: [["id", "DESC"]],
              })
            : {};

        res.render("index", {
            page: isAdmin ? "home" : "profile",
            props: {
                title: "User",
                data,
                user,
                menu: { home: true },
            },
        });
    }
    static studentView = async (req, res) => {
        const { user } = req.session.passport;
        const data = await User.findAll({
            attributes: ["id", "email", "roles"],
            include: [
                {
                    model: People,
                    attributes: ["name", "phone", "address"],
                },
            ],
            where: { roles: "STUDENT" },
            raw: true,
            order: [["id", "DESC"]],
        });

        res.render("index", {
            page: "students",
            props: {
                title: "Student",
                data,
                user,
                menu: { students: true },
            },
        });
    }
    static profileView(req, res) {
        const { user } = req.session.passport;

        res.render("index", {
            page: "profile",
            props: {
                title: "Profile",
                data: {},
                user,
                menu: { settings: true },
            },
        });
    }
}

module.exports = ViewController;
