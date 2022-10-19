import { memo } from 'react';
import { useAppContext } from '../views/Home';
import InputField from './Forms/TextField/InputField';
import Box from './layout/Box';
import Typography from './layout/Typography';
import Note from './Note';

const LeftColumn = () => {
    const context = useAppContext();

    return (
        <div className="col-span-4  overflow-auto left-col">
            <Box className="flex justify-between items-center p-4">
                <Typography
                    as="h6"
                    className="text-rose-500 text-2xl italic font-bold"
                >
                    TheoNote
                </Typography>
            </Box>
            <Box className="w-11/12 m-auto h-10 mb-4">
                <InputField
                    type="search"
                    value={context?.searchNote}
                    onChange={context?.handleSearchNote}
                    placeholder="search notes"
                />
            </Box>

            {context?.isFetchingNotes ? (
                <Box className="col-span-4 overflow-auto left-col">
                    <Typography as="h1">Loading...</Typography>
                </Box>
            ) : (
                context?.notes.map((note) => {
                    return <Note note={note} key={note._id} />;
                })
            )}
        </div>
    );
};

const memoizedLeftColumn = memo(LeftColumn);

export default memoizedLeftColumn;
