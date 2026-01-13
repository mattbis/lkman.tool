import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        include: ['src.ts/**/__tests__/**/*.{test,spec}.{ts,mjs}', 'src.ts/**/*.test.{ts,js}']
    }
})
