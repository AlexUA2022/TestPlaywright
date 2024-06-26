class ModalWindowProductPageAvailable {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.locator('#modal-root div').filter({ hasText: 'Моторна олива Mobil Super' }).nth(4),
		getProductName: () => this.page.locator('#modal-root').getByText('Моторна олива Mobil Super'),
		getProductImage: () => this.page.locator('img[alt="Моторна олива Mobil Super 3000 X1 Formula FE 5W-30"]').last(),
		getButtonNextSlide: () => this.page.getByLabel('Next slide'),
		getButtonPreviousSlide: () => this.page.getByLabel('Previous slide'),
		getCloseButton: () => this.page.locator('#modal-root').getByRole('button').first()
 };

		async clickCloseButton() {
			await this.locators.getCloseButton().click();

		}

}

export default ModalWindowProductPageAvailable;