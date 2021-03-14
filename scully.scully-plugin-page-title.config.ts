import { HandledRoute, registerPlugin, ScullyConfig } from '@scullyio/scully';
require('scully-plugin-page-title');

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'scully-plugin-page-title',
	outDir: './dist/static',
	routes: {},
	defaultPostRenderers: ['combineStylesAmpPlugin'],
};
