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
    /// Инд напр медосм.
    /// </summary>
    // *** Start programmer edit section *** (ИндНапрМедосм CustomAttributes)

    // *** End programmer edit section *** (ИндНапрМедосм CustomAttributes)
    [AutoAltered()]
    [Caption("Инд напр медосм")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ИндНапрМедосмE", new string[] {
            "Номер as \'Номер документа\'",
            "Дата as \'Дата\'",
            "Организации as \'Организация\'",
            "Организации.Наименование as \'Наименование\'",
            "МедУчреждение as \'Медицинское учреждение\'",
            "МедУчреждение.Наименование as \'Наименование\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.Номер as \'Номер сотрудника\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Сотрудники.Должности.Наименование as \'Должность\'",
            "Сотрудники.Подразделение.Наименование as \'Подразделение\'"}, Hidden=new string[] {
            "Организации.Наименование",
            "МедУчреждение.Наименование",
            "Сотрудники.ФИО"})]
    [AssociatedDetailViewAttribute("ИндНапрМедосмE", "ВреднФактПроиз", "ВреднФактПроизE", true, "", "Вредные факторы производства", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ИндНапрМедосмE", "Организации", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ИндНапрМедосмE", "МедУчреждение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ИндНапрМедосмE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ИндНапрМедосмL", new string[] {
            "Номер as \'Номер документа\'",
            "Дата as \'Дата\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "МедУчреждение.Наименование as \'Медицинское учреждение\'"})]
    public class ИндНапрМедосм : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private int fНомер;
        
        private IIS.UchetMedZueva10.МедУчреждение fМедУчреждение;
        
        private IIS.UchetMedZueva10.Сотрудники fСотрудники;
        
        private IIS.UchetMedZueva10.Организации fОрганизации;
        
        private IIS.UchetMedZueva10.DetailArrayOfВреднФактПроиз fВреднФактПроиз;
        
        // *** Start programmer edit section *** (ИндНапрМедосм CustomMembers)

        // *** End programmer edit section *** (ИндНапрМедосм CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ИндНапрМедосм.Дата CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Дата Get start)

                // *** End programmer edit section *** (ИндНапрМедосм.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ИндНапрМедосм.Дата Get end)

                // *** End programmer edit section *** (ИндНапрМедосм.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Дата Set start)

                // *** End programmer edit section *** (ИндНапрМедосм.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ИндНапрМедосм.Дата Set end)

                // *** End programmer edit section *** (ИндНапрМедосм.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ИндНапрМедосм.Номер CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Номер Get start)

                // *** End programmer edit section *** (ИндНапрМедосм.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ИндНапрМедосм.Номер Get end)

                // *** End programmer edit section *** (ИндНапрМедосм.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Номер Set start)

                // *** End programmer edit section *** (ИндНапрМедосм.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ИндНапрМедосм.Номер Set end)

                // *** End programmer edit section *** (ИндНапрМедосм.Номер Set end)
            }
        }
        
        /// <summary>
        /// Инд напр медосм.
        /// </summary>
        // *** Start programmer edit section *** (ИндНапрМедосм.МедУчреждение CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.МедУчреждение CustomAttributes)
        [PropertyStorage(new string[] {
                "МедУчреждение"})]
        [NotNull()]
        public virtual IIS.UchetMedZueva10.МедУчреждение МедУчреждение
        {
            get
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.МедУчреждение Get start)

                // *** End programmer edit section *** (ИндНапрМедосм.МедУчреждение Get start)
                IIS.UchetMedZueva10.МедУчреждение result = this.fМедУчреждение;
                // *** Start programmer edit section *** (ИндНапрМедосм.МедУчреждение Get end)

                // *** End programmer edit section *** (ИндНапрМедосм.МедУчреждение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.МедУчреждение Set start)

                // *** End programmer edit section *** (ИндНапрМедосм.МедУчреждение Set start)
                this.fМедУчреждение = value;
                // *** Start programmer edit section *** (ИндНапрМедосм.МедУчреждение Set end)

                // *** End programmer edit section *** (ИндНапрМедосм.МедУчреждение Set end)
            }
        }
        
        /// <summary>
        /// Инд напр медосм.
        /// </summary>
        // *** Start programmer edit section *** (ИндНапрМедосм.Организации CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.Организации CustomAttributes)
        [PropertyStorage(new string[] {
                "Организации"})]
        [NotNull()]
        public virtual IIS.UchetMedZueva10.Организации Организации
        {
            get
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Организации Get start)

                // *** End programmer edit section *** (ИндНапрМедосм.Организации Get start)
                IIS.UchetMedZueva10.Организации result = this.fОрганизации;
                // *** Start programmer edit section *** (ИндНапрМедосм.Организации Get end)

                // *** End programmer edit section *** (ИндНапрМедосм.Организации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Организации Set start)

                // *** End programmer edit section *** (ИндНапрМедосм.Организации Set start)
                this.fОрганизации = value;
                // *** Start programmer edit section *** (ИндНапрМедосм.Организации Set end)

                // *** End programmer edit section *** (ИндНапрМедосм.Организации Set end)
            }
        }
        
        /// <summary>
        /// Инд напр медосм.
        /// </summary>
        // *** Start programmer edit section *** (ИндНапрМедосм.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.UchetMedZueva10.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Сотрудники Get start)

                // *** End programmer edit section *** (ИндНапрМедосм.Сотрудники Get start)
                IIS.UchetMedZueva10.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ИндНапрМедосм.Сотрудники Get end)

                // *** End programmer edit section *** (ИндНапрМедосм.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.Сотрудники Set start)

                // *** End programmer edit section *** (ИндНапрМедосм.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ИндНапрМедосм.Сотрудники Set end)

                // *** End programmer edit section *** (ИндНапрМедосм.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Инд напр медосм.
        /// </summary>
        // *** Start programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз CustomAttributes)
        public virtual IIS.UchetMedZueva10.DetailArrayOfВреднФактПроиз ВреднФактПроиз
        {
            get
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Get start)

                // *** End programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Get start)
                if ((this.fВреднФактПроиз == null))
                {
                    this.fВреднФактПроиз = new IIS.UchetMedZueva10.DetailArrayOfВреднФактПроиз(this);
                }
                IIS.UchetMedZueva10.DetailArrayOfВреднФактПроиз result = this.fВреднФактПроиз;
                // *** Start programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Get end)

                // *** End programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Set start)

                // *** End programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Set start)
                this.fВреднФактПроиз = value;
                // *** Start programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Set end)

                // *** End programmer edit section *** (ИндНапрМедосм.ВреднФактПроиз Set end)
            }
        }
        
        // *** Start programmer edit section *** (ИндНапрМедосм.Печать CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.Печать CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Печать()
        {
            // *** Start programmer edit section *** (ИндНапрМедосм.Печать method implementation)
            return;
            // *** End programmer edit section *** (ИндНапрМедосм.Печать method implementation)
        }
        
        // *** Start programmer edit section *** (ИндНапрМедосм.Удалить CustomAttributes)

        // *** End programmer edit section *** (ИндНапрМедосм.Удалить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Удалить()
        {
            // *** Start programmer edit section *** (ИндНапрМедосм.Удалить method implementation)
            return;
            // *** End programmer edit section *** (ИндНапрМедосм.Удалить method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ИндНапрМедосмE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИндНапрМедосмE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИндНапрМедосмE", typeof(IIS.UchetMedZueva10.ИндНапрМедосм));
                }
            }
            
            /// <summary>
            /// "ИндНапрМедосмL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИндНапрМедосмL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИндНапрМедосмL", typeof(IIS.UchetMedZueva10.ИндНапрМедосм));
                }
            }
        }
    }
}
