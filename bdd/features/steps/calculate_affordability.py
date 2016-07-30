from behave import *

use_step_matcher("re")


@then('the page contains "(?P<text>.+)"')
def step_impl(context, text):
    context.test.assertTrue(context.browser.is_element_present_by_text(text))
