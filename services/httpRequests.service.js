/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
const _parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.clone().json();
};

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @param  {object} config     A config that was used for network request
 * @return {object|undefined}  Returns either the response, or throws an error
 */
const _checkStatus = (response, config) => {
  if (response.ok) {
    return response;
  }

  throw new Error(
    `Network Request error: ${response.url} -> ${JSON.stringify(config)} -> ${
      response.statusText
    }`,
  );
};

function fetchRequest(url, config) {
  return fetch(url, config)
    .then((response) => _checkStatus(response, config))
    .then(_parseJSON)
    .catch((e) => {
      throw new Error(e);
    });
}

function _setHeadersToTheRequest(headers = {}, config) {
  let mConfig = config;
  const mHeaders = {
    ...headers,
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  };

  if (mHeaders) {
    mConfig = {
      ...config,
      headers: new Headers(mHeaders),
    };
  }

  return mConfig;
}

export const httpPost = async (url, data, headers = {}) => {
  let config = {
    method: "POST",
    body: new URLSearchParams({ ...data }),
  };

  config = _setHeadersToTheRequest(headers, config);

  return fetchRequest(url, config);
};
