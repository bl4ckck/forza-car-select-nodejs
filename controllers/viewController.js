const { User, People, Sequelize } = require("../models");

/**
 * Auth View
 */
exports.loginView = async (req, res) => {
    res.render("index", {
        page: "login",
        props: {
            title: "Login",
        }
    });
};

exports.registerView = async (req, res) => {
    res.render("index", {
        page: "register",
        props: {
            title: "Register",
        }
    });
};
/**
 * Auth View - END
 */
exports.homeView = async (req, res) => {
    const { user } = req.session.passport;
    const data = await User.findAll({
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
    });

    res.render("index", {
        page: "home",
        props: {
            title: "User",
            data,
            user,
            menu: { home: true },
        },
    });
};

exports.studentView = async (req, res) => {
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
};
