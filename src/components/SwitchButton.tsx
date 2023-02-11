import * as Switch from '@radix-ui/react-switch';
import { useActiveMode } from '../context/ActiveMode';

type activeDarkProps = {};

export function SwitchButton() {
  const { isActiveMode, activeDark, activeLight } = useActiveMode();

  console.log(isActiveMode);

  function switchMode() {
    !isActiveMode ? activeDark : activeLight;

    console.log(isActiveMode);
  }

  return (
    <div className='flex items-center' onClick={switchMode}>
      <Switch.Root className='group' id='airplane-mode'>
        <div className='flex items-center w-[42px] h-[25px] bg-[#00000070] border rounded-full relative shadow-md  group-data-[state=checked]:bg-slate-900  border-'>
          <Switch.Thumb className='block w-[21px] h-[21px] bg-white rounded-full shadow-stone-800 transition translate-x-0 will-change-transform group-data-[state=checked]:translate-x-5 group-data-[state=checked]' />
        </div>
      </Switch.Root>

      <label className='Label text-base font-medium' htmlFor='airplane-mode'>
        Modo escuro
      </label>
    </div>
  );
}
/* 

.SwitchRoot {
  width: 42px;
  height: 25px;
  background-color: var(--blackA9);
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px var(--blackA7);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.SwitchRoot:focus {
  box-shadow: 0 0 0 2px black;
}
.SwitchRoot[data-state='checked'] {
  background-color: black;
}

.SwitchThumb {
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--blackA7);
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
}
.SwitchThumb[data-state='checked'] {
  transform: translateX(19px);
}

.Label {
  color: white;
  font-size: 15px;
  line-height: 1;
}
*/
