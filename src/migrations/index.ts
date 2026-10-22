import * as migration_20261022_035443_initial from './20261022_035443_initial';
import * as migration_20261022_053549_site_settings from './20261022_053549_site_settings';

export const migrations = [
  {
    up: migration_20261022_035443_initial.up,
    down: migration_20261022_035443_initial.down,
    name: '20261022_035443_initial',
  },
  {
    up: migration_20261022_053549_site_settings.up,
    down: migration_20261022_053549_site_settings.down,
    name: '20261022_053549_site_settings'
  },
];
