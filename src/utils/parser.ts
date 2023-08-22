const parser = {
  parseUserAgent: (userAgent: string) => {
    const parsedData = {
      browser: '',
      operatingSystem: '',
      webKit: '',
    };

    const browserMatches = userAgent.match(/(Chrome|Safari|Firefox|Edge)\/([\d.]+)/);
    const osMatches = userAgent.match(/(Macintosh|Windows NT|Windows|Linux|CrOS|Dart|PostmanRuntime)[^)]+\)/);
    const webKitMatches = userAgent.match(/AppleWebKit\/([\d.]+)/);

    if (browserMatches) {
      parsedData.browser = `${browserMatches[1]} ${browserMatches[2]}`;
    }

    if (osMatches) {
      parsedData.operatingSystem = osMatches[0];
    }

    if (webKitMatches) {
      parsedData.webKit = webKitMatches[0];
    }

    return parsedData;
  },
};

export default parser;
