import OilsAndAutomotiveChemicalsPage from "./oilsAndAutomotiveChemicalsPage";
import TelescopicLoaderAGRISTARPage from "./telescopicLoaderAGRISTARPage";
import SearchResultsPage from "./searchResults";
import FiltersPage from "./filtersPage";
import SparePartsForAgriculturalMachineryPage from "./sparePartsForAgriculturalMachineryPage";
import SparePartsForTrucksPage from "./sparePartsForTrucksPage";
import BearingsPage from "./bearingsPage";
import OtherProductsPage from "./otherProductsPage";
import TiresAndTubesPage from "./tiresAndTubesPage";
import DoYouWantSomethingSpecialDialogBoxPage from "./doYouWantSomethingSpecialDialogBoxPage";
import MiniTransporterHECHT2636Page from "./miniTransporterHECHT2636";
import MobilSuper3000Page from "./mobilSuper3000";
import ModalWindowEmptyCart from "./modalWindowEmptyCart";
import ModalWindowCartWithProducts from "./modalWindowCartWithProducts";

class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
		getLogoFooter: () => this.page.getByRole('contentinfo').getByRole('img'),
		getCatalogbutton: () => this.page.getByRole('button', { name: 'Каталог' }),
		getdropdownMenu: () => this.page.getByRole('banner').getByRole('list'),
		getFilterСhapter: () => this.page.getByRole('button', { name: 'Фільтри' }),
		getSparePartsForAgriculturalMachinery: () => this.page.getByRole('button', { name: 'Запчастини до сільгосптехніки' }),
		getSparePartsForAgriculturalMachineryVector: () => this.page.locator('.w-full .stroke-iconPrimary').nth(2),
		getFilterSubcategory: () => this.page.getByText('МасляніПаливніПовітряніІнші'),
		getSparePartsForAgriculturalMachinerySubcategory: () => this.page.getByText('John DeereCase та New'),
		getSparePartsForTrucks: () => this.page.getByRole('button', { name: 'Запчастини до вантажних автомобілів' }),
		getSparePartsForTrucksVector: () => this.page.locator('.w-full .stroke-iconPrimary').nth(3),
		getSearchField: () => this.page.getByRole('textbox', { name: 'Я шукаю' }),
		getButtonSearch: () => this.page.getByRole('banner').getByRole('button').nth(2),
		getTelescopicLoaderAGRISTARPage: () => this.page.getByRole('link', { name: 'Навантажувач телескопічний' }),
		getSparePartsForTrucksSubcategory: () => this.page.getByText('DAFMANMersedes-'),
		getBearingCategory: () => this.page.getByRole('button', { name: 'Підшипники' }),
		getOtherProductsCategory: () => this.page.getByRole('button', { name: 'Інші товари' }),
		getTiresAndTubesCategory: () => this.page.getByRole('button', { name: 'Шини та камери' }),
		getOilsAndAutomotiveChemicals: () => this.page.getByRole('button', { name: 'Масла та автохімія' }),
		getOilsAndAutomotiveChemicalsVector: () => this.page.locator('.w-full .stroke-iconPrimary').first(),
		getOilsAndAutomotiveChemicalsSubcategory: () => this.page.getByText('МоторніТрансмісійніГідравлічніЗмазкиАвтохімія'),
		getDropdownSearch: () => this.page.locator('#__next > div:nth-child(1) > header > nav > div.tablet1024\:flex.tablet1024\:items-center.tablet1024\:justify-between.hidden > div.flex.items-center > form > ul'),
		getPhoneNumber: () => this.page.locator('div').filter({ hasText: /^\+38 \(096\) 361 83 98$/ }).nth(1),
		getPhoneNumberDropdown: () => this.page.locator('div').filter({ hasText: /^\+38 \(096\) 361 83 98Кошик$/ }).getByRole('img').nth(1),
		getfirstNumberPhone: () => this.page.getByRole('banner').locator('li').filter({ hasText: '+38 (096) 361 83' }),
		getSecondNumberPhone: () => this.page.getByRole('banner').locator('li').filter({ hasText: '+38 (063) 507 12' }),
		getCatalogMenuButton: (pageName) => this.page.getByText(pageName, { exact: true }),
		getCatalogMenuButton2: (pageName) => this.page.getByRole('button', { name: pageName, exact: true }),
		getCartButton: () => this.page.getByRole('button', { name: 'Кошик', exact: true }),
		getCartPopUp: () => this.page.getByText('КошикОчистити кошикКошик порожнійПочніть додавати товари прямо зараз!Перейти до '),
		getToTheBuyer: () => this.page.getByRole('heading', { name: 'Покупцеві' }),
		getOnlineHelp: () => this.page.getByRole('contentinfo').getByText('Онлайн допомога'),
		getPrivacyPolicy: () => this.page.getByText('Політика конфіденційності'),
		getPublicOfferAgreementLink: () => this.page.locator('li').filter({ hasText: 'Договір публічної оферти' }),
		getCatalogSectionFooter: () => this.page.getByRole('contentinfo').getByText('КаталогМасла та автохіміяФільтриЗапчастини до сільгосптехнікиЗапчастини до ванта'),
		getHeaderCatalogSectionFooter: () => this.page.getByRole('heading', { name: 'Каталог' }),
		getToTheBuyerSectionFooter: () => this.page.getByText('ПокупцевіОнлайн допомогаПолітика конфіденційностіДоговір публічної оферти'),
		getHeaderToTheBuyerSectionFooter: () => this.page.getByRole('heading', { name: 'Покупцеві' }),
		getSparePartsForAgriculturalMachineryFooterLink: () => this.page.getByRole('contentinfo').getByText('Запчастини до сільгосптехніки'),
		getSparePartsForTrucksFooterLink: () => this.page.getByRole('contentinfo').getByText('Запчастини до вантажних автомобілів'),
		getOilsAndAutomotiveChemicalsFooterLink: () => this.page.getByRole('contentinfo').getByText('Масла та автохімія'),
		getTiresAndTubesFooterLink: () => this.page.getByRole('contentinfo').getByText('Шини та камери'),
		getFiltersFooterLink: () => this.page.getByRole('contentinfo').getByText('Фільтри'),
		getBearingsFooterLink: () => this.page.getByRole('contentinfo').getByText('Підшипники'),
		getOtherProductsFooterLink: () => this.page.getByRole('contentinfo').getByText('Інші товари'),
		getPhoneNumbers: () => this.page.locator('#__next > div:nth-child(1) > footer > div > div.footer-lists > div:nth-child(4) > ul'),
		getSectionContacts: () => this.page.getByRole('heading', { name: 'Контакти' }),
		getWorkScheduleSection: () => this.page.getByRole('heading', { name: 'Графік роботи' }),
		getWorkScheduleList: () => this.page.locator('#__next > div:nth-child(1) > footer > div > div.footer-lists > div:nth-child(5) > ul'),
		getOnlineHelpFooter: () => this.page.getByRole('contentinfo').getByText('Онлайн допомога'),
		getCopyrightTrademarkFooter: () => this.page.getByText('©2024 Всі права захищені'),
		getCatalogSectionLinksFooter: (pageName) => this.page.getByRole('contentinfo').getByText(pageName, { exact: true }),
		getIframeOnlineHelpFooter: async () => await this.page.frameLocator('#chatApp').locator('html'),
		getIframeOnlineHelpLogoFooter: async () => await this.page.frameLocator('.logo-wrapper>img').locator('html'),
		getStoreAdressFooter: () => this.page.locator('li').filter({ hasText: 'Адреса магазину' }),
		getFilterUnitDropdownKrayinaCategory: () => this.page.getByText('Країна', { exact: true }),
		getFilterUnitDropdownKrayinaCategoryButton: () => this.page.locator('form').filter({ hasText: 'Ціна—Виробник 1232 1321 Agri' }).getByRole('button').nth(2),
		getFilterUnitDropdownKrayinaCategorySection: () => this.page.getByText('Країна Бельгія1 Білорусь1'),
		getFilterUnitDropdownKrayinaCategorySearchField: () => this.page.locator('.filter').last(),
		getKrayinaCategorySearchFieldIcon: () => this.page.locator('form').filter({ hasText: 'Ціна—Виробник 1232 1321 Agri' }).getByRole('img').nth(4),
		getKrayinaCategorySearchFieldPlaceholder: () => this.page.getByPlaceholder('Введіть країну'),
		getCountryItemByText: (item) => this.page.getByText(item),
		getFilterContaine: () => this.page.locator('div').filter({ hasText: 'Ціна—Виробник 1232 1321 Agri' }).nth(3),
		getUkraineCountryItem: (item) => this.page.getByText('Україна'),
		getCountryItemByCheckbox: (item) => this.page.getByLabel(item),
		getBrazilCountryItemCheckbox: () => this.page.getByLabel('Бразилія'),
		getBrazilCountryCountItems: () => this.page.locator('li').filter({ hasText: 'Бразилія' }).locator('span'),
		getZastosuvatuButton: () => this.page.getByRole('button', { name: 'Застосувати' }),
		getZastosuvatuButtonWithItem: () => this.page.getByRole('button', { name: 'Застосувати (1)' }),
		getSkunytuButton: () => this.page.getByRole('button', { name: 'Скинути' }),
		getFilterPrice: () => this.page.getByText('Ціна—'),
		getFilterPriceMin: () => this.page.getByPlaceholder('4'),
		getFilterPriceMax: () => this.page.getByPlaceholder('000'),
		getFilterPriceDropdown: () => this.page.locator('div').filter({ hasText: /^Ціна—$/ }).getByRole('button'),
		getProductListPage: (item) => this.page.locator('ul').filter({ hasText: 'ВідсутнійАртикул:' }),
		getBrazilCountryChips: () => this.page.getByRole('button', { name: 'Бразилія' }),
		getBrazilCountryChipsCrossIcon: () => this.page.locator('.stroke-iconPrimary.stroke-2'),
		getManufacturerDropdown: () => this.page.locator('div').filter({ hasText: /^Виробник$/ }).first(),
		getManufacturerSectionList: () => this.page.getByText('Виробник 1232 1321 Agri'),
		getManufactureSectionChekbox: (box) => this.page.getByLabel(box),
		getManufactureSectionChekboxBoschCheckbox: () => this.page.getByLabel('BOSCH'),
		getManufacturerSectionSearchField: () => this.page.locator('.filter').first(),
		getManufacturerSectionSearchFieldPlaceholder: () => this.page.getByPlaceholder('Введіть виробника'),
		getXOchustutuButton: () => this.page.getByRole('button', { name: 'Очистити' }),
		getXOchustutuButtonCrossIcon: () => this.page.locator('.stroke-iconBrandDark.stroke-2'),
		getLearnMoreButton: () => this.page.getByRole('button', { name: 'Дізнатись більше' }),
		getDoYouWantSomethingSpecialDialogBox: () => this.page.locator('#modal-root div').filter({ hasText: 'Бажаєте щось особливе?Розкажіть нам про ваші побажання. А про інше потурбується ' }).nth(3),
		getMessageManufacturerSectionSearchField: () => this.page.getByText('По вашому запиту нічого не знайдено. Уточніть свій запит'),
		getDeleteDataManufacturerSectionSearch: () => this.page.locator('.relative > .absolute').first(),
		getScrollManufacturerSectionList: () => this.page.locator('#style-scroll:first-child'),
		getTheOrderIsSuccessfulWindow: () => this.page.getByText('Замовлення успішне!Очікуйте дзвінка нашого менеджера протягом 5'),
		getTheOrderIsSuccessfulWindow: () => this.page.getByText('Замовлення успішне!Очікуйте дзвінка нашого менеджера протягом 5'),
		getSortDropdown: () => this.page.getByText('Сортувати:Оберіть значення'),
		getSortDropdownFromCheapToexpensive: () => this.page.getByText('Від дешевих до дорогих'),
		getSortDropdownFromExpensiveToCheap: () => this.page.getByText('Від дорогих до дешевих'),
		getProductCardLocator: () => this.page.getByRole('link', { name: 'Міні транспортер HECHT 2636' }),
		getPagination: () => this.page.locator('div').filter({ hasText: /^123456789$/ }).nth(2),
		getPaginationNextPageButton: () => this.page.getByLabel('Go to next page'),
		getPaginationPreviousPageButton: () => this.page.locator('.MuiPagination-ul > li').first(),
		getProductCard: () => this.page.locator('.relative.cards:nth-child(5)'),
		getButtonAddToCart: () => this.page.locator('.state-button').first(),
		getChatbotButton: () => this.page.locator('.sticky'),
		getOpenedChatbot: async () => await this.page.frameLocator('#chatApp').getByRole('banner'),
		getCardNecessaryProduct: () => this.page.locator('li').filter({ hasText: 'Не знайшли потрібний товар?Розкажіть, що ви шукаєте, а ми спробуємо доставити.Ді' }).locator('div').nth(2),
		getFilterPriceApplyButton: () => this.page.getByRole('button', { name: 'Застосувати (3)' }),
		getMobilSuper3000: () => this.page.getByRole('link', { name: 'Моторна олива Mobil Super' }),
		getCardMiniTrasporterHECHT2636: () => this.page.locator('.relative.cards:nth-of-type(2)'),
		getCardMiniTrasporterHECHT2636Button: () => this.page.getByRole('button', { name: 'Повідомити про наявність' }),
		getCardtelescopicLoaderAGRISTAR: () => this.page.getByRole('link', { name: 'Навантажувач телескопічний' }),
		getMobilSuper3000ToCart: () => this.page.locator('li').filter({ hasText: 'Артикул: testProduct33' }).getByRole('button')
	};

	async open() {
		await this.page.goto("/");
	}

	async clickCatalogbutton() {
		await this.locators.getCatalogbutton().click();
		return this;
	}

	async clickCatalogMenuButton(pageName) {
		await this.locators.getCatalogMenuButton(pageName).click();
	}

	async clickCatalogMenuButton2(pageName) {
		await this.locators.getCatalogMenuButton2(pageName).click();
	}

	async filterHover() {
		const filterChapter = await this.locators.getFilterСhapter();
		await filterChapter.hover();
	}

	async sparePartsForAgriculturalMachineryHover() {
		const filterChapter = await this.locators.getSparePartsForAgriculturalMachinery();
		await filterChapter.hover();
	}

	async clickTelescopicLoaderAGRISTARPage() {
		await this.locators.getTelescopicLoaderAGRISTARPage().click();
		return new TelescopicLoaderAGRISTARPage(this.page);
	}

	async sparePartsForTrucksHover() {
		const filterChapter = await this.locators.getSparePartsForTrucks();
		await filterChapter.hover();
	}

	async oilsAndAutomotiveChemicalsHover() {
		const filterChapter = await this.locators.getOilsAndAutomotiveChemicals();
		await filterChapter.hover();
	}

	async clickOilsAndAutomotiveChemicalsCategory() {
		await this.locators.getOilsAndAutomotiveChemicals().click();
		return new OilsAndAutomotiveChemicalsPage(this.page);
	}

	async clickFiltersCategory() {
		await this.locators.getFilterСhapter().click();
		return new FiltersPage(this.page);
	}

	async clickFiltersCategoryHover() {
		const filterChapter = await this.locators.getFilterСhapter();
		await filterChapter.hover();
	}

	async clickSparePartsForAgriculturalMachinery() {
		await this.locators.getSparePartsForAgriculturalMachinery().click();
		return new SparePartsForAgriculturalMachineryPage(this.page);
	}

	async clickSparePartsForTrucks() {
		await this.locators.getSparePartsForTrucks().click();
		return new SparePartsForTrucksPage(this.page);
	}

	async clickBearings() {
		await this.locators.getBearingCategory().click();
		return new BearingsPage(this.page);
	}

	async clickOtherProducts() {
		await this.locators.getOtherProductsCategory().click();
		return new OtherProductsPage(this.page);
	}

	async clickTiresAndTubes() {
		await this.locators.getTiresAndTubesCategory().click();
		return new TiresAndTubesPage(this.page);
	}

	async enterValidValueSearchField() {
		await this.locators.getSearchField().fill('мото');
		return this;
	}

	async searchField() {
		await this.locators.getSearchField().hover();
		// return this;
	}

	async enterNotValidValueSearchField() {
		await this.locators.getSearchField().fill('dgdg');
		// return this;
	}

	async clickButtonSearch() {
		await this.locators.getButtonSearch().click();
		return new SearchResultsPage(this.page);
	}

	async clickPhoneNumberDropdown() {
		await this.locators.getPhoneNumberDropdown().click();
		return this;
	}

	async clickCartButton() {
		await this.locators.getCartButton().click();
		return this;
	}

	async clickCartButtonToEmptyPage() {
		await this.locators.getCartButton().click();
		return new ModalWindowEmptyCart(this.page);
	}

	async clickCartButtonToCartWithProductsPage() {
		await this.locators.getCartButton().click();
		return new ModalWindowCartWithProducts(this.page);
	}

	async clickOnlineHelp() {
		await this.locators.getOnlineHelp().click();
		return this;
	}

	async clickCatalogSectionLinksFooter(pageName) {
		await this.locators.getCatalogSectionLinksFooter(pageName).click();
	}

	async clickOnlineHelpFooterLinksFooter() {
		await this.locators.getOnlineHelpFooter().click();
	}

	async clickFilterUnitDropdownKrayinaCategoryButton() {
		await this.locators.getFilterUnitDropdownKrayinaCategoryButton().click();
	}

	async clickStoreAdressFooter() {
		await this.locators.getStoreAdressFooter().click();
		return this;
	}

	async clickKrayinaCategorySearchFieldPlaceholder() {
		await this.locators.getKrayinaCategorySearchFieldPlaceholder().click();
	}

	async fillKrayinaCategorySearchFieldPlaceholder() {
		await this.locators.getKrayinaCategorySearchFieldPlaceholder().type('Ук');
	}

	async checkBrazilCountryItemCheckbox() {
		await this.locators.getBrazilCountryItemCheckbox().check();
	}

	async fillFilterPriceMinField() {
		await this.locators.getFilterPriceMin().fill('555');
		return this;
	}

	async clickFilterPriceDropdown() {
		await this.locators.getFilterPriceDropdown().click();
	}

	async clickSkunytuButton() {
		await this.locators.getSkunytuButton().click();
	}

	async clickZastosuvatuButton() {
		await this.locators.getZastosuvatuButton().click();
	}

	async clickBrazilCountryChipsCrossIcon() {
		await this.locators.getBrazilCountryChipsCrossIcon().click();
	}

	async clickBrazilCountryChips() {
		await this.locators.getBrazilCountryChips().click();
	}

	async checkManufactureSectionChekboxBoschCheckbox() {
		await this.locators.getManufactureSectionChekboxBoschCheckbox().check();
	}

	async clickManufacturerSectionSearchFieldPlaceholder() {
		await this.locators.getManufacturerSectionSearchFieldPlaceholder().click()
	}

	async clickXOchustutuButtonCrossIcon() {
		await this.locators.getXOchustutuButtonCrossIcon().click()
	}

	async clickXOchustutuButton() {
		await this.locators.getXOchustutuButton().click()
	}

	async clickLearnMoreButton() {
		await this.locators.getLearnMoreButton().click()
		return new DoYouWantSomethingSpecialDialogBoxPage(this.page);
	}

	async fillManufacturerSectionSearchFieldPlaceholder() {
		await this.locators.getManufacturerSectionSearchFieldPlaceholder().fill('Arm');
	}

	async fillDigistManufacturerSectionSearchFieldPlaceholder() {
		await this.locators.getManufacturerSectionSearchFieldPlaceholder().fill('123');
	}

	async fillSpecialCharactersManufacturerSectionSearchFieldPlaceholder() {
		await this.locators.getManufacturerSectionSearchFieldPlaceholder().fill('*(*');
	}

	async clickDeleteDataManufacturerSectionSearch() {
		await this.locators.getDeleteDataManufacturerSectionSearch().click();
	}

	async clickSortDropdown() {
		await this.locators.getSortDropdown().click();
	}

	async clickSortDropdownFromCheapToexpensive() {
		await this.locators.getSortDropdownFromCheapToexpensive().click();
	}

	async clickSortDropdownFromExpensiveToCheap() {
		await this.locators.getSortDropdownFromExpensiveToCheap().click();
	}

	async clickProductCardLocator() {
		await this.locators.getProductCardLocator().click();
		return new MiniTransporterHECHT2636Page(this.page);
	}

	async clickPaginationNextPageButton() {
		await this.locators.getPaginationNextPageButton().click();
	}

	async clickPaginationPreviousPageButton() {
		await this.locators.getPaginationPreviousPageButton().click();
	}

	async clickChatbotButton() {
		await this.locators.getChatbotButton().click();
	}

	async fillFilterPriceMax() {
		await this.locators.getFilterPriceMax().fill('800')
	}

	async clickFilterPriceApplyButton() {
		await this.locators.getFilterPriceApplyButton().click();
	}

	async clickMobilSuper3000() {
		await this.locators.getMobilSuper3000().click();
		return new MobilSuper3000Page(this.page);
	}

	async clickCardMiniTrasporterHECHT2636() {
		await this.locators.getCardMiniTrasporterHECHT2636().click();
		return new MiniTransporterHECHT2636Page(this.page);
	}

	async clickCardtelescopicLoaderAGRISTAR() {
		await this.locators.getCardtelescopicLoaderAGRISTAR().click();
		return new TelescopicLoaderAGRISTARPage(this.page);
	}

	async clickMobilSuper3000ToCart() {
		await this.locators.getMobilSuper3000ToCart().click();
	}

}

export default HomePage;
