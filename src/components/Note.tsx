const Note = () => {
	return (
		<div className="p-4 bg-blue-500">
			<div className="flex items-center justify-between">
				<p className="font-bold text-black text-base">Untitled Note</p>
				<button className="text-rose-600">Delete</button>
			</div>
			<div className="">
				<span className="block text-base">note body</span>
				<small>Last modified 06/02/2021</small>
			</div>
		</div>
	);
};

export default Note;
