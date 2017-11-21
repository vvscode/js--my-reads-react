/**
 * Generate new list
 * with the only object matched by id will be updated with props
 */
export default (list, id, props) =>
  list.map(
    item =>
      item.id !== id
        ? item
        : {
            ...item,
            ...props
          }
  );
