export default function Modal({ children, setOpen }: { children: React.ReactNode, setOpen: boolean }) {
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
      <div className="bg-white w-96 h-fit p-10 rounded flex flex-col relative shadow">
        <div className="absolute top-4 right-4 p-2" onClick={() => setOpen(false)}>X</div>
        {children}
      </div>
    </div>
  );
}
