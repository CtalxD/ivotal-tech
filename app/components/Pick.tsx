// app/components/Pick.tsx
"use client";

import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

export type Option = { value: string; label: string };
export type PickHandle = { open: () => void };

type Props = {
  label: string;
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
  invalid?: boolean;
};

// A dropdown that lives inside the sentence. Follows the "select-only combobox"
// keyboard pattern: arrows, Home/End, Enter/Space, Escape.
const Pick = forwardRef<PickHandle, Props>(function Pick(
  { label, value, options, placeholder = "", onChange, style, invalid = false },
  ref,
) {
  const uid = useId();
  const root = useRef<HTMLSpanElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const selected = options.findIndex((o) => o.value === value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(Math.max(selected, 0));
  const current = selected >= 0 ? options[selected] : undefined;

  const show = () => {
    setActive(Math.max(selected, 0));
    setOpen(true);
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      trigger.current?.focus();
      show();
    },
  }));

  // Close when clicking or tapping outside.
  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent | TouchEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", away);
    document.addEventListener("touchstart", away);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("touchstart", away);
    };
  }, [open]);

  // Keep the highlighted option visible while using the arrow keys.
  useEffect(() => {
    if (open) document.getElementById(`${uid}-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, uid]);

  const choose = (i: number) => {
    onChange(options[i].value);
    setOpen(false);
    trigger.current?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) show();
        else setActive((i) => Math.min(i + 1, last));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) show();
        else setActive((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        if (open) {
          e.preventDefault();
          setActive(0);
        }
        break;
      case "End":
        if (open) {
          e.preventDefault();
          setActive(last);
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) show();
        else choose(active);
        break;
      case "Escape":
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        if (open) setOpen(false);
        break;
    }
  };

  const classes = ["blank", "blank--pick"];
  if (value) classes.push("is-filled");
  if (invalid) classes.push("is-invalid");

  return (
    <span className="pick" ref={root} style={style}>
      <button
        ref={trigger}
        type="button"
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${uid}-list`}
        aria-activedescendant={open ? `${uid}-${active}` : undefined}
        aria-invalid={invalid || undefined}
        className={classes.join(" ")}
        data-empty={!current}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKeyDown}
      >
        {current ? current.label : placeholder}
      </button>

      {open && (
        <>
          <span className="pick_scrim" aria-hidden="true" onClick={() => setOpen(false)} />
          <ul id={`${uid}-list`} role="listbox" aria-label={label} className="pick_menu">
            {options.map((o, i) => (
              <li
                key={o.value || "none"}
                id={`${uid}-${i}`}
                role="option"
                aria-selected={i === selected}
                data-active={i === active}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(i)}
              >
                {o.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </span>
  );
});

export default Pick;