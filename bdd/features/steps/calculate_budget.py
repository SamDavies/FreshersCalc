from time import sleep

from behave import *
from factory.django import get_model

from mod_choice.models import University

use_step_matcher("re")


@step('I visit the "(?P<page_name>.+)" page')
def step_impl(context, page_name):
    context.browser.visit(context.test_case.live_server_url + '/web/' + page_name + '/')


@given('the university "(?P<name>.+)" exists')
def step_impl(context, name):
    University.objects.create(name=name)


@given("this set of options")
def step_impl(context):
    for row in context.table:
        model = get_model(app="mod_choice", model=row['Model'])
        model.objects.create(name=row['Instance Name'], value=row['Value'])


@when('I select "(?P<choice>.+)" for the question "(?P<question>.+)"')
def step_impl(context, choice, question):
    context.browser.find_option_by_text(choice).first.click()


@when('I select option "(?P<choice>.+)" for the question "(?P<question>.+)"')
def step_impl(context, choice, question):
    context.browser.find_by_text(choice).first.click()


@step('I enter "(?P<css_id>.+)" "(?P<budget>.+)" for the question "(?P<question>.+)"')
def step_impl(context, css_id, budget, question):
    context.browser.find_by_id(css_id).first.fill(budget)


@step('I select "(?P<count>.+)" "(?P<choice>.+)" for the question "(?P<question>.+)"')
def step_impl(context, count, choice, question):
    context.browser.find_by_id(choice).first.find_by_text(count).first.click()


@then('I have "(?P<amount>.+)" left')
def step_impl(context, amount):
    context.test.assertTrue(context.browser.is_element_present_by_text(amount))


@step('I click "(?P<text>.+)"')
def step_impl(context, text):
    context.browser.find_by_text(text).first.click()


@step('I click the "(?P<text>.+)" link')
def step_impl(context, text):
    context.browser.find_by_text(text).first.click()
