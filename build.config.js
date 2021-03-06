module.exports = {

	build_dir: 'build/',
	compile_dir: 'compile/',

	web: {
		js: [
			'src/app/*.js',
			'src/app/**/*.js',
			'!src/**/*.spec.js',
			'!src/assets/**/*.js'
		],
		jsunit: ['src/**/*.spec.js'],
		atpl: [
			'src/app/**/*.tpl.html',
			'!src/app/platform/mobile/**/*.tpl.html'
		],
		less: 'src/less/app.less',
		sass: '',
		assets: ''
	},

	index: 'src/index.html',
	less_files: 'src/**/*.less',
	assets: 'src/assets/**',
	components: [],

	vendor: {
		js: [
			'node_modules/angular/angular.js',
			'node_modules/angular-animate/angular-animate.js',
			// 'node_modules/angular-resource/angular-resource.js',
			'node_modules/angular-sanitize/angular-sanitize.js',
			'node_modules/angular-scroll/angular-scroll.js',
			'node_modules/angular-touch/angular-touch.js',
			'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js',
			'node_modules/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js',
			'node_modules/videogular/videogular.js',
			'node_modules/fastclick/lib/fastclick.js'
		],
		assets: [
			'node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot',
			'node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg',
			'node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf',
			'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff',
			'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2',
			'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
			'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
			'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
			'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
			'node_modules/font-awesome/fonts/fontawesome-webfont.woff2'
		],
		css: []
	}
};
