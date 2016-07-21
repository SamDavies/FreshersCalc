import os

from django.core import management

os.environ['DJANGO_SETTINGS_MODULE'] = 'FreshersCalc.settings'
import django
django.setup()

from django.test.runner import DiscoverRunner
from django.test.testcases import LiveServerTestCase
from rest_framework.test import APITestCase
from splinter.browser import Browser

from bdd.client_auth import ClientAuth


class MockAPITestCase(APITestCase):
    def runTest(self, result=None):
        pass


def before_all(context):
    django.setup()
    context.test_runner = DiscoverRunner()
    context.test_runner.setup_test_environment()
    context.old_db_config = context.test_runner.setup_databases()

    # add the authentication helper
    context.test = MockAPITestCase()
    context.auth = ClientAuth(context.test.client_class())

    context.browser = Browser('phantomjs')
    # context.browser = Browser('chrome')

    # When we're running with PhantomJS we need to specify the window size.
    # This is a workaround for an issue where PhantomJS cannot find elements
    # by text - see: https://github.com/angular/protractor/issues/585
    if context.browser.driver_name == 'PhantomJS':
        context.browser.driver.set_window_size(1280, 1024)


def after_all(context):
    # Quit our browser once we're done!
    context.browser.quit()
    context.browser = None

    context.test_runner.teardown_databases(context.old_db_config)
    context.test_runner.teardown_test_environment()


def before_scenario(context, scenario):
    management.call_command('flush', verbosity=0, interactive=False)
    context.test_case = LiveServerTestCase
    context.test_case.setUpClass()


def after_scenario(context, scenario):
    context.test_case.tearDownClass()
    del context.test_case
