import esbuild from 'esbuild';
import copy from 'esbuild-copy-files-plugin';
import { clean } from 'esbuild-plugin-clean';
import * as fs from "fs";

esbuild.build({
	entryPoints: ['src/index.ts'],
	outdir: 'dist',
	format: 'cjs',
	target: 'es2019',
	bundle: true,
	keepNames: true,
	treeShaking: false,
	legalComments: 'inline',
	plugins: [
		clean({
			patterns: ['dist/*'],
		}),
		copy({
			source: ['./appsscript.json'],
			target: './dist',
			copyWithFolder: true
		}),
	],
}).catch(() => process.exit(1));