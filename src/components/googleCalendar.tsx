"use client";

export default function GoogleCalendarEmbed() {
    return (
        <div className="flex flex-col align-center justify-center space-y-10 py-20">
            <div className="flex flex-col align-center justify-center space-y-2">
                <h1 className="text-4xl font-bold text-center">Book an appointment</h1>
                <p className="text-center">Book an appointment with us to get started.</p>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe
                    src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3xX64wdG-UHPJCSMCLl3SUWdEXIRfygTotFFpRn69QNGtfwXRoXN4v1iBaA7KwgZEPWyhaYNyK"
                    style={{
                        border: 'none',
                        width: '90%',
                        maxWidth: '800px',
                        height: '600px',
                        backgroundColor: 'white',
                    }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-xl overflow-hidden"
                />
            </div>
        </div>
    );
}
