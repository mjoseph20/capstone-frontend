import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function TeamTable() {
    
    const { user, isLoggedIn } = useAuth();
    const [team, setTeam] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            fetch(`http://localhost:8080/api/cast-members/active`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(data => {
                        setTeam(data);
                    });
                } else {
                    response.text().then(text => {
                        console.log(text);
                    });
                }
            }).catch(error => {
                console.error('Network error:', error);
            });
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <div className="container bg-warning mt-5 text-center p-2">
                <h1>Not sure how you got here :/</h1>
                <p>You must be logged in to view your team.</p>
            </div>
        );
    }

    function getZodiacSign(dateString) {
        const date = new Date(dateString);
        const month = date.getUTCMonth() + 1; // getUTCMonth() returns month from 0-11
        const day = date.getUTCDate();
      
        const zodiacSigns = [
          { sign: 'Capricorn', start: '01-01', end: '01-19' },
          { sign: 'Aquarius', start: '01-20', end: '02-18' },
          { sign: 'Pisces', start: '02-19', end: '03-20' },
          { sign: 'Aries', start: '03-21', end: '04-19' },
          { sign: 'Taurus', start: '04-20', end: '05-20' },
          { sign: 'Gemini', start: '05-21', end: '06-20' },
          { sign: 'Cancer', start: '06-21', end: '07-22' },
          { sign: 'Leo', start: '07-23', end: '08-22' },
          { sign: 'Virgo', start: '08-23', end: '09-22' },
          { sign: 'Libra', start: '09-23', end: '10-22' },
          { sign: 'Scorpio', start: '10-23', end: '11-21' },
          { sign: 'Sagittarius', start: '11-22', end: '12-21' },
          { sign: 'Capricorn', start: '12-22', end: '12-31' }
        ];
      
        for (const zodiac of zodiacSigns) {
          const [startMonth, startDay] = zodiac.start.split('-').map(Number);
          const [endMonth, endDay] = zodiac.end.split('-').map(Number);
      
          if (
            (month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay) ||
            (month > startMonth && month < endMonth)
          ) {
            return zodiac.sign;
          }
        }
      
        return 'Invalid date';
      }

    return (
        <div className="container mt-5 text-center" >
            <h1>My Team</h1>
            <table className="table table-striped table-bordered table-responsive mt-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Professional Title</th>
                        <th scope="col">Zodiac Sign</th>
                        <th scope="col">Random Fact</th>
                        {team.length > 0 && <th scope="col"></th>}
                    </tr>
                </thead>
                <tbody>
                    {team.length > 0 ? team.map((member, index) => (
                        <tr key={index}>
                            <td><Link to={`/cast-members/${member.id}`} className='link-underline link-underline-opacity-0'>{member.name}</Link></td>
                            <td>{member.professionalTitle}</td>
                            <td>{getZodiacSign(member.birthDate)}</td>
                            <td>{member.randomFact}</td>
                            <td>
                                <Link to={`/cast-members/swap/${member.id}`} className="btn btn-warning m-2">Swap</Link>
                                <Link to={`/cast-members/delete/${member.id}`} className="btn btn-danger">Remove</Link>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="5">No team members</td></tr>}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5">{(team.length == 5) ? <span className='text-danger'>{team.length}</span> : <span className='text-success'>{team.length}</span>} / 5</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    );
}

export default TeamTable;