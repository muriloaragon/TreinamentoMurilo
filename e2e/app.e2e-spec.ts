import { TreinamentoMuriloPage } from './app.po';

describe('treinamento-murilo App', function() {
  let page: TreinamentoMuriloPage;

  beforeEach(() => {
    page = new TreinamentoMuriloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
