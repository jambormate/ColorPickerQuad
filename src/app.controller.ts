import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }
  @Get('/color-picker')
  @Render('color-picker')
  colorPicker(@Query('color') textColor: string) {
    return {
      textColor
    }
  }
  @Get('/quadratic')
  @Render('quadratic')
  quadraticMaker(
  @Query('A') a: string,
  @Query('B') b: string,
  @Query('C') c: string
) {
  const A = Number(a);
  const B = Number(b);
  const C = Number(c);
  const diszkriminans = B * B - 4 * A * C;
  let x1 = '';
  let x2 = '';
  if (diszkriminans >= 0 && A != 0) {
    x1 = String((-B + Math.sqrt(diszkriminans)) / (2 * A));
    x2 = String((-B - Math.sqrt(diszkriminans)) / (2 * A));
  }
  return {
    x1: x1,
    x2: x2
  };
}
  @Get('/intro')
  @Render('intro')
  intro(@Query('lang') lang: string) {
    if (lang == 'en') {
      return {
        lang: 'en',
        intro: 'This is an "introduction" page.'
      }
    }
    return {
      lang: 'hu',
      intro: 'Ez egy "bemutatkozás" oldal'
    }
  }
  @Get('/afa')
  @Render('afa')
  afa(
    @Query('price') price: string,
    @Query('category') category: string
  ) {
    const alap = Number(price);
    let afa = 0;
    if (category == 'book') {
      afa = 5;
    }
    if (category == 'electronics') {
      afa = 27;
    }
    const vegOsszeg = alap + alap * afa / 100;
    return {
      vegOsszeg
    }
  }
}