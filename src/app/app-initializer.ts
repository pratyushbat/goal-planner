import { ConfigService } from './pages/service/config.service';

export function intializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}
