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
    /// Класс вред фактор.
    /// </summary>
    // *** Start programmer edit section *** (КлассВредФактор CustomAttributes)

    // *** End programmer edit section *** (КлассВредФактор CustomAttributes)
    [AutoAltered()]
    [Caption("Класс вред фактор")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлассВредФакторE", new string[] {
            "ВредныйФактор as \'Вредный фактор\'",
            "Подразделение as \'Подразделение\'",
            "Подразделение.Наименование as \'Подразделение\'"}, Hidden=new string[] {
            "Подразделение.Наименование"})]
    [MasterViewDefineAttribute("КлассВредФакторE", "Подразделение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("КлассВредФакторL", new string[] {
            "ВредныйФактор as \'Вредный фактор\'",
            "Подразделение.Наименование as \'Наименование\'"})]
    public class КлассВредФактор : ICSSoft.STORMNET.DataObject
    {
        
        private string fВредныйФактор;
        
        private IIS.UchetMedZueva10.Подразделение fПодразделение;
        
        // *** Start programmer edit section *** (КлассВредФактор CustomMembers)

        // *** End programmer edit section *** (КлассВредФактор CustomMembers)

        
        /// <summary>
        /// ВредныйФактор.
        /// </summary>
        // *** Start programmer edit section *** (КлассВредФактор.ВредныйФактор CustomAttributes)

        // *** End programmer edit section *** (КлассВредФактор.ВредныйФактор CustomAttributes)
        [StrLen(255)]
        public virtual string ВредныйФактор
        {
            get
            {
                // *** Start programmer edit section *** (КлассВредФактор.ВредныйФактор Get start)

                // *** End programmer edit section *** (КлассВредФактор.ВредныйФактор Get start)
                string result = this.fВредныйФактор;
                // *** Start programmer edit section *** (КлассВредФактор.ВредныйФактор Get end)

                // *** End programmer edit section *** (КлассВредФактор.ВредныйФактор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КлассВредФактор.ВредныйФактор Set start)

                // *** End programmer edit section *** (КлассВредФактор.ВредныйФактор Set start)
                this.fВредныйФактор = value;
                // *** Start programmer edit section *** (КлассВредФактор.ВредныйФактор Set end)

                // *** End programmer edit section *** (КлассВредФактор.ВредныйФактор Set end)
            }
        }
        
        /// <summary>
        /// Класс вред фактор.
        /// </summary>
        // *** Start programmer edit section *** (КлассВредФактор.Подразделение CustomAttributes)

        // *** End programmer edit section *** (КлассВредФактор.Подразделение CustomAttributes)
        [PropertyStorage(new string[] {
                "Подразделение"})]
        [NotNull()]
        public virtual IIS.UchetMedZueva10.Подразделение Подразделение
        {
            get
            {
                // *** Start programmer edit section *** (КлассВредФактор.Подразделение Get start)

                // *** End programmer edit section *** (КлассВредФактор.Подразделение Get start)
                IIS.UchetMedZueva10.Подразделение result = this.fПодразделение;
                // *** Start programmer edit section *** (КлассВредФактор.Подразделение Get end)

                // *** End programmer edit section *** (КлассВредФактор.Подразделение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КлассВредФактор.Подразделение Set start)

                // *** End programmer edit section *** (КлассВредФактор.Подразделение Set start)
                this.fПодразделение = value;
                // *** Start programmer edit section *** (КлассВредФактор.Подразделение Set end)

                // *** End programmer edit section *** (КлассВредФактор.Подразделение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлассВредФакторE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлассВредФакторE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлассВредФакторE", typeof(IIS.UchetMedZueva10.КлассВредФактор));
                }
            }
            
            /// <summary>
            /// "КлассВредФакторL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлассВредФакторL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлассВредФакторL", typeof(IIS.UchetMedZueva10.КлассВредФактор));
                }
            }
        }
    }
}
