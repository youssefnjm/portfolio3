import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { keyframes, scale } from 'motion'

// https://vitejs.dev/config/
export default defineConfig({
	theme: {
		extend: {
			nimation: {
				scale: "scale 1s ease-in-out infinite"
			},
			keyframes: {
				scale: {
					"0%": {
						scale: 1,
					},
					"100%": {
						scale: 1.3,
					},
				}	
			}
		}
	},
	plugins: [react()],
})

// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })