const STORAGE_KEYS = {
  CONTACTS: 'CONTACTS',
};

export default class Storage {
  setContacts(value) {
    if (!value) return;

    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(value));
  }

  getContacts() {
    const value = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    if (!value) return [];

    return JSON.parse(value);
  }
}
