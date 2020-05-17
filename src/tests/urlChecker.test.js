import { checkForUrl } from '../client/js/urlChecker';

test('checkForUrl returns true for a valid Url',() => {

    const response = checkForUrl('https://www.google.com');
    expect(response).toBe(true);
})

test('checkForUrl returns false for a invalid Url',() => {

    const response = checkForUrl('httgshgps://www.google.com');
    expect(response).toBe(false);
})