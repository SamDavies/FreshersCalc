from behave import *
from factory.django import get_model

use_step_matcher("re")


@given("this set of options")
def step_impl(context):
    for row in context.table:
        model = get_model(app="mod_choices", model=row['Model'])
        model.objects.create(name=row['Instance Name '], value=row['Value'])


@given('I select "(?P<choice>.+)" for the question "(?P<question>.+)"')
def step_impl(context, choice, question):
    """
    :type context: behave.runner.Context
    """
    pass


@step('I select "(?P<count>.+)" "(?P<choice>.+)" for the question "(?P<question>.+)"')
def step_impl(context, count, choice, question):
    """
    :type context: behave.runner.Context
    """
    pass