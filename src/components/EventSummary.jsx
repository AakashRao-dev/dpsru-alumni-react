import Events from './Events';

function EventSummary() {
  return (
    <div className="m-auto w-full max-w-[1220px]">
      <h2 className="md:text-2xl text-xl md:text-left text-center tracking-widest uppercase">
        Events & Announcements
      </h2>
      <Events />
    </div>
  );
}
export default EventSummary;
