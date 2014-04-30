require 'spec_helper'

describe "Static pages" do

  describe "testing homepage" do
    before { visit '/home' }

    it "should have the content 'Geisel Library'" do
      expect(page).to have_content('Geisel Library')
    end

    it "should have div overlay" do
      expect(page).to have_css('div.overlay')
    end

    it "should have img class tagged-images if images are displayed" do
      expect(page).to have_css('img.tagged-images')
    end

    it "should have div class pagination" do
      expect(page).to have_css('div.pagination')
    end
  end

  describe "About page" do

    it "should have the content 'About the UC San Diego Library'" do
      visit '/about'
      expect(page).to have_content('About the UC San Diego Library')
    end
  end

end
