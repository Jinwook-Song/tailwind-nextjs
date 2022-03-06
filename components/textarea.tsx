interface ITextArea {
  label?: string;
  name?: string;
  [key: string]: any;
}

function TextArea({ label, name, ...rest }: ITextArea) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className='mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 '
        rows={4}
        {...rest}
      />
    </div>
  );
}

export default TextArea;