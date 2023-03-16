import {defineConfig, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path'

const config = defineConfig((): UserConfig => {
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': join(__dirname, './src')
            }
        }
    }
})

export default config

