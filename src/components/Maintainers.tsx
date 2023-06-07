import '#filter-boolean';

import Dialog from './Dialog.tsx';

import IconPlus from 'icons/plus.tsx';

export default ({ list }: { list: (string | undefined)[] }) => {
  return (
    <div class={'maintainers'}>
      {list
        .filter(Boolean)
        .map((id) => (
          <img
            key={id}
            // onClick={() => console.log('test')}
            src={`https://avatars.fables.workers.dev/?id=${id}`}
          />
        ))}
      {
        <div data-dialog={'maintainers'} disabled>
          <IconPlus />
        </div>
      }

      <Dialog name={'maintainers'} class={'manage-dialog'}>
        <div />
      </Dialog>
    </div>
  );
};
