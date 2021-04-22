import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEdu } from '../../../actions/updateUser';

const ChangeEdu = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const [institution, setInstitution] = useState(currentUser.eduInstitution ? currentUser.eduInstitution : '');
    const [faculty, setFaculty] = useState(currentUser.eduFaculty ? currentUser.eduFaculty : '');
    const [specialty, setSpecialty] = useState(currentUser.eduSpecialty ? currentUser.eduSpecialty : '');
    const [course, setCourse] = useState(currentUser.eduCourse ? currentUser.eduCourse : '');
    const [status, setStatus] = useState(currentUser.eduStatus ? currentUser.eduStatus : '');
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
    }

    const updateEduHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValid([]);
        let changes = {};
        if(institution !== currentUser.eduInstitution){
            changes.eduInstitution = institution;
        }
        if(faculty !== currentUser.eduFaculty){
            changes.eduFaculty = faculty;
        }
        if(specialty !== currentUser.eduSpecialty){
            changes.eduSpecialty = specialty;
        }
        if(status !== currentUser.eduStatus){
            changes.eduStatus = status;
        }
        if(course !== currentUser.eduCourse){
            if(course < 0 || course > 10){
                setValid([true, 'Курс может быть от 0 до 10']);
                offValidByTime();
                return;
            }
            changes.eduCourse = course;
        }
        if(!(Object.keys(changes)).length){
            setValid([true, 'Вы ничего не меняли']);
            offValidByTime();
            return;
        }

        dispatch(updateEdu(changes))
        .then(async res =>{
            await setValid(res);
        });
        offValidByTime();
    }

    return (
        <>
            <div className="settings__edu">
                <h2 className="settings__edu-title">Образование</h2>
                <form className="settings__edu-form" action="#">
                    <div className="settings__edu-form-row settings__edu-form-row-1">
                        <input value={institution} onChange={e => setInstitution(e.target.value)} type="text" name="institution" placeholder="Учебное заведение" />
                    </div>
                    <div className="settings__edu-form-row settings__edu-form-row-2">
                        <input value={faculty} onChange={e => setFaculty(e.target.value)} type="text" name="faculty" placeholder="Факультет" />
                        <input value={specialty} onChange={e => setSpecialty(e.target.value)} type="text" name="specialty" placeholder="Специальность" />
                        <input value={status} onChange={e => setStatus(e.target.value)} type="text" name="status" placeholder="Статус" />
                        <input value={course} onChange={e => setCourse(e.target.value)} min="0" max="10" type="number" name="course" placeholder="Курс" />
                    </div>

                    <button onClick={e => updateEduHandler(e)} disabled={disabledBtn} className="settings__form-btn">Сохранить</button>
                </form>
            </div>
            {valid[0] === 200 ?
                <p className="reg-landing__success">{valid[1]}</p>
            :
                <p className="reg-landing__error">{valid[1]}</p>
            }
        </>
    );
};

export default ChangeEdu;