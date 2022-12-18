const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'69b69909-e6b9-45bc-a31c-79d99247cf46'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
