import Cors from './app-settings/cors';
import { IAppUseSettings } from './../core/use.settings';
import Database from './app-settings/database';

export default [
  {
    name: 'Cors Setup',
    use: Cors
  },
  {
    name: 'Database',
    use: Database
  }
] as IAppUseSettings[];