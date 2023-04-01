import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelitPlugin from 'vite-plugin-stylelint'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin(), stylelitPlugin({ fix: true })],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'), // 把 src 的别名设置为 @
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "@/assets/styles/global.scss" as *;',
			},
		},
	},
	server: {
		host: 'localhost',
		port: 3000,
		open: true,
	},
})
