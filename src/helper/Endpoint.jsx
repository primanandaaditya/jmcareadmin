
class Endpoint{
    static BASE_URL = "http://localhost:8016/api/";
    static faq = "faq/get_faq"
    static faq_detail = "faq/detail_faq"
    static faq_delete = "faq/delete"
    static faq_update = "faq/update"
    static user = "user/get_user"
    static pekerjaan = "pekerjaan/get_jenis_pekerjaan"
    static wilayah = "wilayah/get_wilayah"
    static pendidikan = "moviewlistparam/get_moviewlistparam"
    static getviewlistwo = "Moviewlistparam/getviewlistWO"
    static user_detail = "user/get_user_by_id"
    static user_update = "user/update"
    static user_delete = "user/delete"
    static user_gantipassword = "user/change_password"
    static user_kontrak = "user/get_kontrak"
    static user_agreement_card = "user/agreement_card"
    static user_epolis = "user/ePolis"
    static user_econtract = "user/eAgreement"
    static banner_get_website_artikel = "banner/get_website_artikel"
    static banner_delete_website_artikel = "banner/delete_website_artikel"
    static banner_upsert_website_artikel = "banner/upsert_website_artikel"
}
export default Endpoint;

