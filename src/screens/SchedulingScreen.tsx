// SchedulingScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const SchedulingScreen = () => {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch scheduling data from API
        const fetchSchedule = async () => {
            try {
                const response = await fetch('https://api.lovableapp.com/schedule');
                const data = await response.json();
                setSchedule(data);
            } catch (error) {
                console.error('Error fetching schedule:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedule();
    }, []);

    if (loading) return <Text>Loading...</Text>;

    return (
        <View>
            <Text>Scheduling</Text>
            {schedule.map((item, index) => (
                <View key={index}>
                    <Text>{item.title} - {item.date}</Text>
                </View>
            ))}
            <Button title="Refresh Schedule" onPress={() => setSchedule([])} />
        </View>
    );
};

export default SchedulingScreen;