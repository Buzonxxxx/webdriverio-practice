describe('webdriveruniversity - contact us page', () => {
    beforeEach(async () => {
        await browser.maximizeWindow()
        await browser.url('/Contact-Us/contactus.html')
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });
    it.only('valid submission - submit all information', async () => {
        const firstName = await $('//*[@name="first_name"]')
        const lastName = await $('//*[@name="last_name"]')
        const email = await $('//*[@name="email"]')
        const message = await $('//*[@name="message"]')
        const submitButton = await $('//input[@value="SUBMIT"]')

        await firstName.setValue("Louis")
        await lastName.setValue("Liao")
        await email.setValue("buzonxxxx@gmail.com")
        await message.setValue("Hello how are you")
        await submitButton.click()

        const successfulSubmissionHeader = $('#contact_reply > h1')
        console.log(`successfulSubmissionHeader Element: ${JSON.stringify(await successfulSubmissionHeader)}`)
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!')
    });

    it('invalid submission - dont submit all information', async () => {
        const firstName = await $('//*[@name="first_name"]')
        const lastName = await $('//*[@name="last_name"]')
        const message = await $('//*[@name="message"]')
        const submitButton = await $('//input[@value="SUBMIT"]')

        await firstName.setValue("Louis")
        await lastName.setValue("Liao")
        await message.setValue("Hello how are you")
        await submitButton.click()

        const successfulSubmissionHeader = $('body')
        await expect(successfulSubmissionHeader).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address'])
    });
});