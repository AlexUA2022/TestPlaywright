import ModalWindowCartWithProducts from "./modalWindowCartWithProducts";

class CheckoutPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
	getHeader: () => this.page.getByRole('heading', { name: 'Оформлення замовлення' }),
	getBreadcrumbs: () => this.page.getByRole('button', { name: 'Назад до кошика' }),
	getLegalEntityButton: () => this.page.getByRole('button', { name: 'Юридична особа' }),
	getTypeOfRestraintFieldLabel: () => this.page.getByText('Тип рестрації *'),
	getContactInformationBlock: () => this.page.getByText('Контактні даніТип рестрації *ФОП Назва * ЄДРПОУ * ІПН *Область реєстрації * Місто реєстрації * Юридична адреса *Ім\'я *Прізвище *По батьковіE-mail *Номер телефону *+'),
	getContactInformationBlockHeader: () => this.page.getByRole('heading', { name: 'Контактні дані' }),
	getDropdownMenu: () => this.page.locator('div').filter({ hasText: /^ФОП$/ }).nth(1),
	getDropdownMenuButton: () => this.page.locator('form').filter({ hasText: 'Контактні даніТип рестрації *ФОП Назва * ЄДРПОУ * ІПН *Область реєстрації * Міст' }).getByRole('img'),
	getLegalEntitySection: () => this.page.locator('li.cursor-pointer>div.flex').filter({ hasText: 'Юридична особа' }),
	getFOPSection: () => this.page.locator('li.cursor-pointer>div.flex').filter({ hasText: 'ФОП' }),
	getDropdownMenuLegalEntity: () => this.page.locator('div').filter({ hasText: /^Юридична особа$/ }).first(),
	getNameField: () => this.page.getByLabel('Назва *'),
	getNameFieldLabel: () => this.page.getByText('Назва *'),
	getEDRPOUField: () => this.page.getByLabel('ЄДРПОУ *'),
	getEDRPOUFieldLabel: () => this.page.getByText('ЄДРПОУ *'),
	getIPNField: () => this.page.getByLabel('ІПН *'),
	getIPNFieldLabel: () => this.page.getByText('ІПН *'),
	getRegionField: () => this.page.getByPlaceholder('Введіть назву області'),
	getRegionFieldLabel: () => this.page.getByText('Область реєстрації *'),
	getCityField: () => this.page.getByPlaceholder('Введіть назву міста').first(),
	getCityFieldLabel: () => this.page.getByText('Місто реєстрації *'),
	getLegalAddressesField: () => this.page.getByLabel('Юридична адреса *'),
	getLegalAddressesFieldLabel: () => this.page.getByText('Юридична адреса *'),
	getFirstNameField: () => this.page.getByLabel('Ім\'я *'),
	getFirstNameFieldLabel: () => this.page.getByText('Ім\'я *'),
	getLastNameField: () => this.page.getByLabel('Прізвище *'),
	getLastNameFieldLabel: () => this.page.getByText('Прізвище *'),
	getMiddleNameField: () => this.page.getByLabel('По батькові'),
	getMiddleNameFieldLabel: () => this.page.getByText('По батькові'),
	getEmailField: () => this.page.getByLabel('E-mail *'),
	getEmailFieldLabel: () => this.page.getByText('E-mail *'),
	getPhoneNumberField: () => this.page.getByLabel('Номер телефону *+'),
	getPhoneNumberinputmask: () => this.page.locator('span.absolute '),
	getPhoneNumberFieldLabel: () => this.page.getByText('Номер телефону *+'),
	getDeliveryMethodBlock: () => this.page.getByText('Спосіб та дані доставкиОберіть місто доставки *Нова пошта відділенняСамовивізКур'),
	getDeliveryMethodBlockHeader: () => this.page.getByRole('heading', { name: 'Спосіб та дані доставки' }),
	getDeliveryCityField: () => this.page.locator('div').filter({ hasText: /^Оберіть місто доставки \*$/ }).getByPlaceholder('Введіть назву міста'),
	getDeliveryCityFieldLabel: () => this.page.getByText('Оберіть місто доставки *'),
	getPickupRadiobutton: () => this.page.getByLabel('Самовивіз'),
	getPickupRadiobuttonLabelText: () => this.page.locator('label[for="self"]'),
	getPickupBlock: () => this.page.getByText('СамовивізОберіть адресу магазину*Оберіть значення...Пн - ПтCб9:00-18:009:00-13:'),
	getAddressDropdown: () => this.page.locator('div').filter({ hasText: /^Оберіть значення\.\.\.$/ }).nth(1),
	getAddressDropdownLabel: () => this.page.getByText('Оберіть адресу магазину*'),
	getAddressDropdownPlaceholder: () => this.page.getByText('Оберіть значення'),
	getAddressDropdownButton: () => this.page.locator('div.relative svg').nth(3),
	getAddress1Section: () => this.page.locator('li').filter({ hasText: 'Адресa 1' }),
	getAddress2Section: () => this.page.getByText('Адресa 2'),
	getDropdownAddress1: () => this.page.locator('div').filter({ hasText: /^Адресa 1$/ }).nth(1),
	getDropdownAddress2: () => this.page.locator('div').filter({ hasText: /^Адресa 2$/ }).nth(1),
	getWorkinghoursBlock: () => this.page.getByText('Пн - ПтCб9:00-18:009:00-13:'),
	getWorkinghoursText1: () => this.page.getByText('Пн - Пт', { exact: true }),
	getWorkinghoursText2: () => this.page.getByText('Cб'),
	getWorkinghoursText3: () => this.page.getByText('9:00-18:00', { exact: true }),
	getWorkinghoursText4: () => this.page.getByText('9:00-13:00', { exact: true }),
	getNewBranchPostOfficeRadiobutton: () => this.page.getByLabel('Нова пошта відділення'),
	getNewBranchPostOfficeRadiobuttonLabelText: () => this.page.getByText('Нова пошта відділення'),
	getNewBranchPostOfficeBlock: () => this.page.getByText('Нова пошта відділенняОберіть поштове відділення *'),
	getNewBranchPostOfficeField: () => this.page.locator('div').filter({ hasText: /^Оберіть поштове відділення \*$/ }).locator('div').nth(2),
	getNewBranchPostOfficeFieldLabel: () => this.page.getByText('Оберіть поштове відділення *'),
	getNewBranchPostOfficeErrorMessage: () => this.page.locator('div.text-textError'),
	getNewBranchPostOfficeFieldPlaceholder: () => this.page.getByPlaceholder('Оберіть значення або введіть назву'),
	getСourierRadiobutton: () => this.page.getByLabel('Кур\'єр Запчастюлька'),
	getСourierRadiobuttonLabelText: () => this.page.getByText('Кур\'єр Запчастюлька'),
	getСourierBlock: () => this.page.getByText('Кур\'єр ЗапчастюлькаВведіть назву вулиці* Номер будинку* Номер квартири'),
	getСourierSrteetField: () => this.page.getByPlaceholder('Введіть назву та оберіть значення'),
	getСourierSrteetFieldLabel: () => this.page.getByText('Введіть назву вулиці*'),
	getСourierErrorMessage: () => this.page.getByText('Ви не обрали місто доставки'),
	getСourierHouseField: () => this.page.locator('div').filter({ hasText: /^Введіть назву вулиці\* Номер будинку\* Номер квартири$/ }).getByRole('textbox').nth(1),
	getСourierHouseFieldLabel: () => this.page.getByText('Номер будинку*'),
	getСourierFlatField: () => this.page.locator('div').filter({ hasText: /^Введіть назву вулиці\* Номер будинку\* Номер квартири$/ }).getByRole('textbox').nth(2),
	getСourierFlatFieldLabel: () => this.page.getByText('Номер квартири'),
	getСourierNPRadiobutton: () => this.page.getByLabel('Кур\'єр Нова Пошта'),
	getСourierNPRadiobuttonLabelText: () => this.page.getByText('Кур\'єр Нова Пошта'),
	getСourierNPBlock: () => this.page.getByText('Кур\'єр Нова ПоштаВведіть назву вулиці* Номер будинку* Номер квартири'),
	getСourierNPSrteetField: () => this.page.getByPlaceholder('Введіть назву та оберіть значення'),
	getСourierNPSrteetFieldLabel: () => this.page.getByText('Введіть назву вулиці*'),
	getСourierNPErrorMessage: () => this.page.getByText('Ви не обрали місто доставки'),
	getСourierNPHouseField: () => this.page.locator('div').filter({ hasText: /^Введіть назву вулиці\* Номер будинку\* Номер квартири$/ }).getByRole('textbox').nth(1),
	getСourierNPHouseFieldLabel: () => this.page.getByText('Номер будинку*'),
	getСourierNPFlatField: () => this.page.locator('div').filter({ hasText: /^Введіть назву вулиці\* Номер будинку\* Номер квартири$/ }).getByRole('textbox').nth(2),
	getСourierNPFlatFieldLabel: () => this.page.getByText('Номер квартири'),
	getComment: () => this.page.getByLabel('Коментар до замовлення'),
	getCommentHeader: () => this.page.getByText('Коментар до замовлення'),
	getPlaceAnOrderButton: () => this.page.getByRole('button', { name: 'Оформити замовлення' }),
	getCommentErrorMessage: () => this.page.getByText('Коментар має містити не менше 10 символів'),
	getInformationBlock: () => this.page.getByText('Ваше замовленняМоторна олива').nth(1),
	getInformationBlockHrader: () => this.page.getByRole('heading', { name: 'Ваше замовлення' })
 };

		async clickBreadcrumbs() {
			await this.locators.getBreadcrumbs().click();
			return new ModalWindowCartWithProducts(this.page);
		}

		async clickLegalEntityButton() {
			await this.locators.getLegalEntityButton().click();
		}

		async clickDropdownMenuButton() {
			await this.locators.getDropdownMenuButton().click();
		}

		async clickLegalEntitySection() {
			await this.locators.getLegalEntitySection().click();
		}

		async checkPickupRadiobutton() {
			await this.locators.getPickupRadiobutton().check();
		}

		async clickAddressDropdownButton() {
			await this.locators.getAddressDropdownButton().click();
		}

		async clickAddress1Section() {
			await this.locators.getAddress1Section().click();
		}

		async clickAddress2Section() {
			await this.locators.getAddress2Section().click();
		}

		async checkNewBranchPostOfficeRadiobutton() {
			await this.locators.getNewBranchPostOfficeRadiobutton().check();
		}

		async clickNewBranchPostOfficeField() {
			await this.locators.getNewBranchPostOfficeField().click();
		}

		async clickСourierRadiobutton() {
			await this.locators.getСourierRadiobutton().click();
		}

		async clickСourierSrteetField() {
			await this.locators.getСourierSrteetField().click();
		}

		async clickСourierNPRadiobutton() {
			await this.locators.getСourierNPRadiobutton().click();
		}

		async clickСourierNPSrteetField() {
			await this.locators.getСourierNPSrteetField().click();
		}

		async clickComment() {
			await this.locators.getComment().click();
		}

		async fillComment() {
			await this.locators.getComment().fill('Відмінний магазин');
		}

		async fillCommentLess10() {
			await this.locators.getComment().fill('1');
		}

		async clickPlaceAnOrderButton() {
			await this.locators.getPlaceAnOrderButton().click();
		}

}

export default CheckoutPage;