/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];
  for (user of users) {
    names.push(`${user.name}`);
  }
  return names;
}
