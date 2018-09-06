module.exports = {
    apps: [{
        name: "WebDealerMaster",
        script: "server",
        env: {
            "NODE_ENV": "dev",
        },
        env_stg: {
            "NODE_ENV": "stg",
        },
        env_prod: {
            "NODE_ENV": "production",
            "crose-env": ""
        }
    }]
}