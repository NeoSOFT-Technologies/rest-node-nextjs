export default function plopfile(plop) {
    // create your helper here.
    // convert string to camel case.
    plop.setHelper('camelCase', (text) => {
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    });
    plop.setHelper('dashCase', (text) => {
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : `-${word.toLowerCase()}`;
        }).replace(/\s+/g, '');
    });
    plop.setHelper('capitalize', (text) => {
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, '');
    });
    // create your generators here.
    // plop.setGenerator('name', {
    //     description: '',
    //     // array of inquirer prompts.
    //     prompts: [],
    //     // array of actions.
    //     actions: []
    // })

    // generate backend files.
    plop.setGenerator('backend-all', {
        description: 'creates entity, service, controller (backend)',
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Creating Entity, Service and Controller files \n Enter Entity Name",
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/server/entities/{{camelCase name}}.ts',
                templateFile: 'plop-templates/entity.hbs'
            },
            {
                type: 'add',
                path: 'src/server/services/{{camelCase name}}.service.ts',
                templateFile: 'plop-templates/service.hbs'
            },
            {
                type: 'add',
                path: 'src/server/controllers/{{camelCase name}}.controller.ts',
                templateFile: 'plop-templates/controller.hbs'
            }
        ]
    });
    plop.setGenerator('utility(helper)', {
        description: 'creates a helper file under src/server/utils directory ',
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter Utility Name (Helper)",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/client/utils/{{camelCase name}}.helper.ts",
            },
        ],
    });

    // generate frontend files
    plop.setGenerator("page", {
        description: "creates a page under src/pages directory",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter Name page",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/pages/{{dashCase name}}/{{camelCase name}}.tsx",
                templateFile: "./plop-templates/page.hbs",
            },
            {
                type: "add",
                path: "src/client/testing/{{capitalize name}}.test.tsx",
            },
            {
                type: "add",
                path: "src/client/styles/{{capitalize name}}.module.scss",
            },
        ],
    });

    plop.setGenerator("component", {
        description: "creates a component under src/client/components directory",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter Component Name",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/client/components/{{dashCase name}}/{{capitalize name}}.tsx",
                templateFile: "./plop-templates/component.hbs",
            },
            {
                type: "add",
                path: "src/client/components/{{dashCase name}}/{{capitalize name}}.test.tsx",
            },
        ],
    });

    plop.setGenerator("resource", {
        description: "creates a resource under src/client/resources directory",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter Resource Name",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/client/resources/{{camelCase name}}.ts",
            },
        ],
    });

    plop.setGenerator("service", {
        description: "creates a service file under src/client/services directory",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter Service Name",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/client/services/{{camelCase name}}.ts",
            },
        ],
    });

    plop.setGenerator("slice", {
        description: "creates a redux toolkit slice src/client/store directory",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter slice Name",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/client/store/{{dashCase name}}/slice.ts",
                templateFile: "./plop-templates/slice.hbs",
            },
            {
                type: "add",
                path: "src/client/store/{{dashCase name}}/slice.test.ts",
            },
        ],
    });

    plop.setGenerator("utility", {
        description: "creates a utility file under src/client/utils directory",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter Utility Name",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/client/utils/{{camelCase name}}.ts",
            },
        ],
    });
}