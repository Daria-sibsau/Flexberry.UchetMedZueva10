﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.UchetMedZueva10
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "Номер as \'Номер\'",
            "ФИО as \'ФИО\'",
            "Пол as \'Пол\'",
            "ДатаРождения as \'Дата рождения\'",
            "СерияПаспорта as \'Серия паспорта\'",
            "НомерПаспорта as \'Номер паспорта\'",
            "Телефон as \'Телефон\'",
            "Должности as \'Должности\'",
            "Должности.Наименование as \'Должность\'",
            "Подразделение as \'Подразделение\'",
            "Подразделение.Наименование as \'Подразделение\'"}, Hidden=new string[] {
            "Должности.Наименование",
            "Подразделение.Наименование"})]
    [MasterViewDefineAttribute("СотрудникиE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("СотрудникиE", "Подразделение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникиL", new string[] {
            "Номер as \'Номер\'",
            "ФИО as \'ФИО\'",
            "Пол as \'Пол\'",
            "ДатаРождения as \'Дата рождения\'",
            "СерияПаспорта as \'Серия паспорта\'",
            "НомерПаспорта as \'Номер паспорта\'",
            "Телефон as \'Телефон\'",
            "Должности.Наименование as \'Наименование\'",
            "Подразделение.Наименование as \'Наименование\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерПаспорта;
        
        private string fФИО;
        
        private int fТелефон;
        
        private IIS.UchetMedZueva10.ПолСотрудника fПол;
        
        private System.DateTime fДатаРождения;
        
        private int fСерияПаспорта;
        
        private int fНомер;
        
        private IIS.UchetMedZueva10.Подразделение fПодразделение;
        
        private IIS.UchetMedZueva10.Должности fДолжности;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Get start)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Get end)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Set start)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Set end)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Номер CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Номер Get start)

                // *** End programmer edit section *** (Сотрудники.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Сотрудники.Номер Get end)

                // *** End programmer edit section *** (Сотрудники.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Номер Set start)

                // *** End programmer edit section *** (Сотрудники.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Сотрудники.Номер Set end)

                // *** End programmer edit section *** (Сотрудники.Номер Set end)
            }
        }
        
        /// <summary>
        /// НомерПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.НомерПаспорта CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.НомерПаспорта CustomAttributes)
        public virtual int НомерПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.НомерПаспорта Get start)

                // *** End programmer edit section *** (Сотрудники.НомерПаспорта Get start)
                int result = this.fНомерПаспорта;
                // *** Start programmer edit section *** (Сотрудники.НомерПаспорта Get end)

                // *** End programmer edit section *** (Сотрудники.НомерПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.НомерПаспорта Set start)

                // *** End programmer edit section *** (Сотрудники.НомерПаспорта Set start)
                this.fНомерПаспорта = value;
                // *** Start programmer edit section *** (Сотрудники.НомерПаспорта Set end)

                // *** End programmer edit section *** (Сотрудники.НомерПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Пол.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Пол CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Пол CustomAttributes)
        public virtual IIS.UchetMedZueva10.ПолСотрудника Пол
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Пол Get start)

                // *** End programmer edit section *** (Сотрудники.Пол Get start)
                IIS.UchetMedZueva10.ПолСотрудника result = this.fПол;
                // *** Start programmer edit section *** (Сотрудники.Пол Get end)

                // *** End programmer edit section *** (Сотрудники.Пол Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Пол Set start)

                // *** End programmer edit section *** (Сотрудники.Пол Set start)
                this.fПол = value;
                // *** Start programmer edit section *** (Сотрудники.Пол Set end)

                // *** End programmer edit section *** (Сотрудники.Пол Set end)
            }
        }
        
        /// <summary>
        /// СерияПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.СерияПаспорта CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.СерияПаспорта CustomAttributes)
        public virtual int СерияПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.СерияПаспорта Get start)

                // *** End programmer edit section *** (Сотрудники.СерияПаспорта Get start)
                int result = this.fСерияПаспорта;
                // *** Start programmer edit section *** (Сотрудники.СерияПаспорта Get end)

                // *** End programmer edit section *** (Сотрудники.СерияПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.СерияПаспорта Set start)

                // *** End programmer edit section *** (Сотрудники.СерияПаспорта Set start)
                this.fСерияПаспорта = value;
                // *** Start programmer edit section *** (Сотрудники.СерияПаспорта Set end)

                // *** End programmer edit section *** (Сотрудники.СерияПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Телефон Get start)

                // *** End programmer edit section *** (Сотрудники.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудники.Телефон Get end)

                // *** End programmer edit section *** (Сотрудники.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Телефон Set start)

                // *** End programmer edit section *** (Сотрудники.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудники.Телефон Set end)

                // *** End programmer edit section *** (Сотрудники.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Get start)

                // *** End programmer edit section *** (Сотрудники.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудники.ФИО Get end)

                // *** End programmer edit section *** (Сотрудники.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Set start)

                // *** End programmer edit section *** (Сотрудники.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудники.ФИО Set end)

                // *** End programmer edit section *** (Сотрудники.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должности CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.UchetMedZueva10.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должности Get start)

                // *** End programmer edit section *** (Сотрудники.Должности Get start)
                IIS.UchetMedZueva10.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Сотрудники.Должности Get end)

                // *** End programmer edit section *** (Сотрудники.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должности Set start)

                // *** End programmer edit section *** (Сотрудники.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Сотрудники.Должности Set end)

                // *** End programmer edit section *** (Сотрудники.Должности Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Подразделение CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Подразделение CustomAttributes)
        [PropertyStorage(new string[] {
                "Подразделение"})]
        [NotNull()]
        public virtual IIS.UchetMedZueva10.Подразделение Подразделение
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Подразделение Get start)

                // *** End programmer edit section *** (Сотрудники.Подразделение Get start)
                IIS.UchetMedZueva10.Подразделение result = this.fПодразделение;
                // *** Start programmer edit section *** (Сотрудники.Подразделение Get end)

                // *** End programmer edit section *** (Сотрудники.Подразделение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Подразделение Set start)

                // *** End programmer edit section *** (Сотрудники.Подразделение Set start)
                this.fПодразделение = value;
                // *** Start programmer edit section *** (Сотрудники.Подразделение Set end)

                // *** End programmer edit section *** (Сотрудники.Подразделение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.UchetMedZueva10.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.UchetMedZueva10.Сотрудники));
                }
            }
        }
    }
}
