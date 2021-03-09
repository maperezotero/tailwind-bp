// Si estamos en modo production añadimos cssnano
if (process.env.NODE_ENV === 'production') {
	module.exports = {
		plugins: {
		tailwindcss: {},
		autoprefixer: {},
		cssnano: {
			preset: 'default',
			},
		},
	};
} else {
	module.exports = {
		plugins: {
		tailwindcss: {},
		autoprefixer: {},
		},
	};
}
