import * as Switch from '@radix-ui/react-switch';
import { Moon } from 'phosphor-react';
import { useActiveMode } from '../context/ActiveMode';

export function SwitchButton() {
  const { isActiveMode, activeDark, activeLight } = useActiveMode();

  function switchMode() {
    isActiveMode ? activeDark() : activeLight();
  }

  return (
    <button
      className="flex items-center gap-4"
      onClick={switchMode}
      tabIndex={0}
      onKeyDown={switchMode}
    >
      <Switch.Root className="group" id="airplane-mode">
        <div className="flex items-center justify-between px-1 w-16 h-8 bg-[#00000070] border rounded-full relative shadow-md group-data-[state=checked]:bg-slate-900  border-">
          <Switch.Thumb className="block w-[25px] h-[25px] bg-white rounded-full shadow-stone-800 transition ease-in-out translate-x-0 will-change-transform group-data-[state=checked]:translate-x-7 group-data-[state=checked]" />
          <Moon aria-details="Lua" size={20} />
        </div>
      </Switch.Root>

      <label
        className="Label text-base font-semibold w-16 uppercase"
        htmlFor="airplane-mode"
      >
        Modo escuro
      </label>
    </button>
  );
}
