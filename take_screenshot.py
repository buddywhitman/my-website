from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')
            page.screenshot(path='screenshot_initial.png', full_page=True)
            print("Screenshot saved to screenshot_initial.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
