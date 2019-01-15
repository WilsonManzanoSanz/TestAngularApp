import { BluelivModule } from './blueliv.module';

describe('BluelivModule', () => {
  let bluelivModule: BluelivModule;

  beforeEach(() => {
    bluelivModule = new BluelivModule();
  });

  it('should create an instance', () => {
    expect(bluelivModule).toBeTruthy();
  });
});
