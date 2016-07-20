import base64


class ClientAuth(object):

    def __init__(self, client):
        self.basic = ClientBasicAuth(client)


class ClientBasicAuth(object):

    def __init__(self, client):
        self.client = client

    def _make_request(self, url, http_method, email, password, data):
        """
        Add the Basic Auth credentials then make a request
        :param url: the to request to
        :param http_method: the HTTP method to use e.g GET, POST etc.
        :param email: the email address of the user
        :param password:
        :param data:
        :return:
        """
        self.client.credentials(HTTP_AUTHORIZATION='Basic ' + base64.b64encode(email + ":" + password))
        return http_method(url, data=data, format='json')

    def get(self, url, email, password, data=None):
        return self._make_request(url, self.client.get, email, password, data=data)

    def post(self, url, email, password, data=None):
        return self._make_request(url, self.client.post, email, password, data=data)

    def patch(self, url, email, password, data=None):
        return self._make_request(url, self.client.patch, email, password, data=data)

    def put(self, url, email, password, data=None):
        return self._make_request(url, self.client.put, email, password, data=data)

    def delete(self, url, email, password, data=None):
        return self._make_request(url, self.client.delete, email, password, data=data)